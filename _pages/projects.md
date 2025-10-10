---
layout: single
title: Prosjekter
permalink: /projects/
author_profile: true
---

Her finner du en oversikt over noen av mine prosjekter. Jeg har valgt ut tre som viser bredden i min erfaring – fra backend og enhetstesting i bachelorprosjektet, til fullstack-utvikling med .NET og React.

---

## ☕ Drømmekoppen — Bachelorprosjekt (2025)

**Rolle:** Backend-utvikler og ansvarlig for enhetstesting  
**Teknologi:** ASP.NET Core, C#, REST API, SQLite, GitHub Actions for testing og CI  
**Type prosjekt:** Bacheloroppgave, 2025 – OsloMet

**Beskrivelse:**  
Drømmekoppen er en interaktiv webapplikasjon der brukeren kan bygge sin egen kaffekopp ved å velge ingredienser. Applikasjonen visualiserer hvordan koppen fylles med ulike lag av ingredienser i sanntid.

Backend-en ble utviklet i ASP.NET Core og eksponerte et REST-API for frontend-kommunikasjon.  
Jeg hadde hovedansvar for backend-logikken, enhetstesting av API-endepunktene og validering av dataflyt mellom lagene.

**Læringspunkter:**

- Design og implementasjon av RESTful API-er i C#.
- Strukturering av kode for testbarhet og bruk av xUnit til enhetstesting.
- Samarbeid i team med delt ansvar for både backend og UI-logikk.

📎 _Kode:_ [Se prosjekt på GitHub](https://github.com/LightningGoose/Drommekoppen)  
🧠 _Demo / konsept:_ [Demo av prosjektet](https://matchaogmocha.no/)

---

## 🖼️ Bilder, kommentarer og notater (Fullstack-prosjekt)

**Rolle:** Fullstack-utvikler  
**Teknologi:**

- Del 1: C#, ASP.NET Core (både frontend og backend)
- Del 2: ASP.NET Core backend (C#) + React frontend (TypeScript)
- Database: SQL Server

**Beskrivelse:**  
Dette prosjektet ble utviklet i to deler som en del av faget Webprogrammering.  
Applikasjonen lar brukere laste opp bilder og skrive notater, samt kommentere på både bilder og andres notater.

I første versjon var hele løsningen bygget i .NET (Razor Pages + MVC).  
I den andre versjonen flyttet vi frontend til React (TypeScript) for en mer dynamisk brukeropplevelse, og beholdt backend i ASP.NET Core som REST API.

**Funksjonalitet:**

- Opplasting av bilder og notater knyttet til bruker-ID
- Relasjonsbaserte kommentarer (kommentarer på bilder og andre kommentarer)
- Datamodellering og CRUD-operasjoner gjennom repository-pattern
- Bruk av React Hooks og komponentstruktur i frontend

**Læringspunkter:**

- Erfaring med fullstack-arkitektur og REST-kommunikasjon
- Forståelse av datamodellering og relasjoner
- Integrasjon av React-frontend mot .NET-backend

📎 _Kode:_ [Se prosjekt på GitHub](https://github.com/Selundq/ITPE3200-React)  
🧠 _Demo:_ Vises på forespørsel

---

## 🧩 Mini-mikrotjeneste i Go — "Notes Service"

**Rolle:** Solo-utvikler  
**Teknologi:** Go (Golang), Gin, SQLite (eller in-memory), Docker

**Beskrivelse:**  
Et læringsprosjekt hvor jeg bygde en liten mikrotjeneste i Go som lar brukeren opprette, lese, oppdatere og slette notater via et REST-API.  
Målet med prosjektet var å lære Go-syntaks, idiomatisk struktur og hvordan man håndterer routing, feil og samtidighet (goroutines).

**Funksjonalitet:**

- CRUD-endepunkter for notater
- Håndtering av JSON-requests/responses
- Enkel lokal lagring i SQLite / in-memory
- Dockerfile for enkel kjøring og testing

**Læringspunkter:**

- Forståelse av Go sine idiomer, structer og interfaces
- Bruk av Gin-rammeverket for HTTP-håndtering
- Erfaring med Docker og containerisering

📎 _Kode:_ [Se prosjekt på GitHub](#)

Flere prosjekter kommer snart 🚧
