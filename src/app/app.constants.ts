export let CONFIGURATION = {
  baseUrls: {
    server: process.env.API_HOST,
    apiUrl: process.env.API_HOST + "api/"
  },
  accountStatuses: {
    pending: "Pending",
    active: "Active",
    inActive: "InActive"
  },
  globalRoles: {
    netidSiteAdmin: "NETiDSiteAdmin",
    netidAdmin: "NETiDAdmin",
    netidDiocesanAdmin: "NETiDDiocesanAdmin",
    netidDiocesanUser: "NETiDDiocesanUser",
    netidUser: "NETiDUser"
  },
  organisationRoles: {
    administrator: "Administrator",
    standard: "Standard"
  },
  disabledReasons: {
    extendedLeave: "ExtendedLeave",
    noLongerRequired: "NoLongerRequired",
    other: "Other",
    securityBreach: "SecurityBreach"
  },
};