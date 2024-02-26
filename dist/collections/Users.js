"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Users = {
    slug: "users",
    auth: true,
    admin: {
        useAsTitle: "email",
    },
    fields: [
        // Email added by default
        // Add more fields as needed
        {
            name: "picture",
            type: "upload",
            relationTo: "media",
        },
    ],
};
exports.default = Users;
