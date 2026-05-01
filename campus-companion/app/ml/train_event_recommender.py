"""
Component 4 - Event Recommender ML Feature
Model: Logistic Regression for click/save likelihood using fictional data.

Run:
    pip install pandas scikit-learn
    python train_event_recommender.py
"""

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder, MultiLabelBinarizer
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

events = pd.read_csv("events_fictional.csv")
users = pd.read_csv("users_fictional.csv")
interactions = pd.read_csv("event_interactions_fictional.csv")

# Merge interaction rows with event and user details
df = interactions.merge(events, on="event_id").merge(users, on="user_id")

# Target: whether the user showed interest.
# This uses behaviour data: clicked, saved, or attended.
df["interested"] = ((df["clicked"] == 1) | (df["saved"] == 1) | (df["attended"] == 1)).astype(int)

# Feature engineering: count overlap between user's interests and event tags.
def interest_overlap(row):
    user_interests = set(str(row["interests"]).split(","))
    event_tags = set(str(row["tags"]).split(","))
    return len(user_interests.intersection(event_tags))

df["interest_overlap"] = df.apply(interest_overlap, axis=1)

features = ["category", "society", "course", "interest_overlap"]
target = "interested"

X = df[features]
y = df[target]

categorical_features = ["category", "society", "course"]
numeric_features = ["interest_overlap"]

preprocessor = ColumnTransformer(
    transformers=[
        ("categorical", OneHotEncoder(handle_unknown="ignore"), categorical_features),
        ("numeric", "passthrough", numeric_features),
    ]
)

model = LogisticRegression(max_iter=1000, random_state=42)

pipeline = Pipeline(steps=[
    ("preprocessor", preprocessor),
    ("model", model)
])

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.30, random_state=42, stratify=y
)

pipeline.fit(X_train, y_train)
predictions = pipeline.predict(X_test)

print("=== Component 4: Event Recommender ===")
print("Model: Logistic Regression")
print(f"Accuracy: {accuracy_score(y_test, predictions):.2f}")
print("\nClassification report:")
print(classification_report(y_test, predictions, zero_division=0))
print("Confusion matrix:")
print(confusion_matrix(y_test, predictions))

# Recommend events for one fictional user
selected_user_id = 1
selected_user = users[users["user_id"] == selected_user_id].iloc[0]

# Build candidate event rows for prediction
candidate_rows = []
for _, event in events.iterrows():
    user_interests = set(str(selected_user["interests"]).split(","))
    event_tags = set(str(event["tags"]).split(","))
    overlap = len(user_interests.intersection(event_tags))

    candidate_rows.append({
        "event_id": event["event_id"],
        "title": event["title"],
        "category": event["category"],
        "society": event["society"],
        "course": selected_user["course"],
        "interest_overlap": overlap,
    })

candidates = pd.DataFrame(candidate_rows)
probabilities = pipeline.predict_proba(candidates[features])[:, 1]
candidates["recommendation_score"] = probabilities

# Remove events already saved/attended by user, optional
already_interacted = interactions[
    (interactions["user_id"] == selected_user_id) &
    ((interactions["saved"] == 1) | (interactions["attended"] == 1))
]["event_id"].tolist()

recommendations = candidates[~candidates["event_id"].isin(already_interacted)]
recommendations = recommendations.sort_values("recommendation_score", ascending=False).head(5)

print(f"\nTop recommendations for {selected_user['name']}:")
print(recommendations[["title", "category", "society", "recommendation_score"]].to_string(index=False))
