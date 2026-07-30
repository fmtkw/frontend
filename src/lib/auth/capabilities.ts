import type { UserRole } from "@/types/api";

export type Capability =
  | "viewPanel"
  | "viewOwnMembership"
  | "manageOwnEntity"
  | "approveMembership"
  | "manageBilling"
  | "publishNews"
  | "manageDocuments"
  | "manageOmbudsman"
  | "manageCms"
  | "exportData"
  | "viewIntegrityCases";

const roleCapabilities: Record<UserRole, Capability[]> = {
  admin: [
    "viewPanel",
    "viewOwnMembership",
    "manageOwnEntity",
    "approveMembership",
    "manageBilling",
    "publishNews",
    "manageDocuments",
    "manageOmbudsman",
    "manageCms",
    "exportData",
    "viewIntegrityCases",
  ],
  secretaria: [
    "viewPanel",
    "approveMembership",
    "manageDocuments",
    "manageOmbudsman",
    "manageCms",
    "exportData",
  ],
  financeiro: ["viewPanel", "manageBilling", "approveMembership", "exportData"],
  comunicacao: ["viewPanel", "publishNews", "manageCms"],
  comissao_tecnica: ["viewPanel"],
  representante: ["viewPanel", "viewOwnMembership", "manageOwnEntity"],
  filiado: ["viewPanel", "viewOwnMembership"],
};

export function capabilitiesFor(role: UserRole): Set<Capability> {
  return new Set(roleCapabilities[role] ?? ["viewPanel"]);
}

export function can(role: UserRole, capability: Capability): boolean {
  return capabilitiesFor(role).has(capability);
}
