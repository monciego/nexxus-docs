// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Nexxus",
      logo: {
        src: "./src/assets/logo.svg",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/monciego/nexxus-docs",
        },
      ],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            { label: "Introduction", slug: "getting-started/introduction" },
            { label: "Overview", slug: "getting-started/overview" },
            { label: "Roles & Access", slug: "getting-started/roles-access" },
          ],
        },
        {
          label: "Events",
          items: [
            { label: "Events Overview", slug: "events/overview" },
            { label: "Creating an Event", slug: "events/creating-an-event" },
            { label: "Event Details", slug: "events/event-details" },
            { label: "Talent Assignments", slug: "events/talent-assignments" },
            { label: "Rehearsals", slug: "events/rehearsals" },
            { label: "Event Checklist", slug: "events/event-checklist" },
          ],
        },
        {
          label: "Clients",
          items: [
            { label: "Clients Overview", slug: "clients/overview" },
            { label: "Creating a Client", slug: "clients/creating-a-client" },
            { label: "Client Details", slug: "clients/client-details" },
          ],
        },
        {
          label: "Talents",
          items: [
            { label: "Talent Overview", slug: "talents/overview" },
            { label: "Talent Onboarding", slug: "talents/talent-onboarding" },
            { label: "My Profile", slug: "talents/my-profile" },
          ],
        },
        {
          label: "Call Sheets",
          items: [
            { label: "Call Sheets Overview", slug: "call-sheets/overview" },
            { label: "Call Sheet Templates", slug: "call-sheets/templates" },
            {
              label: "Creating a Call Sheet",
              slug: "call-sheets/creating-a-call-sheet",
            },
            {
              label: "Sending Call Sheets",
              slug: "call-sheets/sending-call-sheets",
            },
          ],
        },
        {
          label: "Calendar",
          items: [
            { label: "Calendar Overview", slug: "calendar/overview" },
            { label: "Calendar Entries", slug: "calendar/calendar-entries" },
          ],
        },
        {
          label: "Messages",
          items: [
            { label: "Direct Messages", slug: "messages/direct-messages" },
            { label: "Group Messages", slug: "messages/group-messages" },
            {
              label: "Sharing Call Sheets",
              slug: "messages/sharing-call-sheets",
            },
          ],
        },
        {
          label: "Media",
          items: [
            { label: "Media Management", slug: "media/media-management" },
          ],
        },
        {
          label: "Administration",
          items: [
            { label: "Users", slug: "administration/users" },
            {
              label: "Roles & Permissions",
              slug: "administration/roles-permissions",
            },
            { label: "Access Control", slug: "administration/access-control" },
          ],
        },
      ],
    }),
  ],
});
