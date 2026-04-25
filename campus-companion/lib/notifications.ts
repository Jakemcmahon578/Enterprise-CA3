export type CampusNotification = {
  id: string;
  title: string;
  message: string;
  type: "Event" | "Timetable" | "Canteen" | "Lost & Found" | "General";
  read: boolean;
  createdAt: string;
};

const STORAGE_KEY = "campusNotifications";

export function getNotifications(): CampusNotification[] {
  if (typeof window === "undefined") return [];

  const saved = localStorage.getItem(STORAGE_KEY);
  return saved ? JSON.parse(saved) : [];
}

export function addNotification(
  notification: Omit<CampusNotification, "id" | "read" | "createdAt">
) {
  const current = getNotifications();

  const newNotification: CampusNotification = {
    ...notification,
    id: crypto.randomUUID(),
    read: false,
    createdAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify([newNotification, ...current]));

  return newNotification;
}

export function saveNotifications(notifications: CampusNotification[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
}