"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Projects = {
    slug: "projects",
    access: {
        read: function () { return true; },
    },
    fields: [
        {
            name: "title",
            type: "text",
            required: true,
        },
        {
            name: "description",
            type: "text",
            required: true,
        },
        {
            name: "link",
            type: "text",
        },
        {
            name: "featured_image",
            type: "upload",
            relationTo: "media",
            required: false,
        },
        {
            name: "order",
            type: "number",
            required: false,
        },
    ],
};
exports.default = Projects;
