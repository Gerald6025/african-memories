export function publicRelations(now = new Date()) {
  return {
    prices: {
      where: { isActive: true, validFrom: { lte: now }, validTo: { gte: now } },
      orderBy: { validFrom: "desc" as const },
    },
    availabilities: {
      where: { startsAt: { gt: now }, remaining: { gt: 0 } },
      orderBy: { startsAt: "asc" as const },
    },
  };
}
