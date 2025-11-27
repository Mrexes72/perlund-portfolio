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
🧠 [🌐 matchaogmocha.no](https://matchaogmocha.no)

- (Merk: Nettsiden kjører på gratisnivået i Azure, og kan derfor være treg ved oppstart. Dette er bevisst for å holde kostnadene nede.)

---

## 🖼️ Bilder, kommentarer og notater (Fullstack-prosjekt)

**Rolle:** Fullstack-utvikler  
**Teknologi:**

- Del 1: C#, ASP.NET Core (både frontend og backend)
- Del 2: ASP.NET Core backend (C#) + React frontend (TypeScript)
- Database: SQLite

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

📎 _Kode:_ [Se prosjekt på GitHub](https://github.com/Mrexes72/ITPE3200-React)  
🧠 _Demo:_ Vises på forespørsel

---

## 🤖 AI-agent i Python — "Build an AI Agent with Gemini"

Rolle: Solo-utvikler  
Teknologi: Python, Google Gemini API (genai), dotenv, subprocess

Beskrivelse:
Et eksperimentelt prosjekt hvor jeg bygde en AI-agent i Python som kan tolke brukerkommandoer, planlegge funksjonskall og utføre dem dynamisk.
Agenten kommuniserer med Gemini-modellen gjennom et system av meldinger (messages) og kan blant annet liste filer, lese innhold, kjøre Python-filer og skrive filer basert på hva brukeren spør om.

Prosjektet var en del av et dypdykk i LLM-integrasjon, tool use og “reasoning loops”, hvor modellen selv avgjør når og hvordan verktøy skal brukes.

Funksjonalitet:

- Dynamisk funksjonskall basert på LLM-respons
- Iterativ “reasoning loop” med maks 20 steg
- Integrasjon mot Google Gemini via genai.Client
- Sikker kjøring av Python-filer med subprocess og mappesjekk
- Støtte for både tekstrespons og funksjonsresultater

Læringspunkter:

- Bruk av Gemini API og verktøysfunksjoner i Python
- Implementering av funksjonskall i LLM-agent-arkitektur
- Forståelse av samtalehistorikk (messages) og tool responses
- Robust feilhåndtering og output-parsing

📎 _Kode:_ [Se prosjekt på GitHub](https://github.com/Mrexes72/ai-agent)

---

## 🪐 Asteroids — Objektorientert spillutvikling i Python

Beskrivelse:  
Et moderne gjenoppbygg av det klassiske Asteroids-spillet, utviklet fra bunnen av i Python med Pygame.
Spillet demonstrerer bruk av objektorientert programmering (OOP), kollisjonsdeteksjon og enkel fysikksimulering.

Teknologi og verktøy:

- Python
- Pygame
- Objektorientert programmering (OOP)
- Hendelseshåndtering, animasjon og spill-logikk

Funksjonalitet:

- Spilleren kan bevege, rotere og skyte
- Kuler har nedkjøling (cooldown) for realistisk gameplay
- Asteroider beveger seg i tilfeldige retninger og splittes ved treff
- Kollisjoner oppdages og håndteres dynamisk

Hva jeg lærte:

- Hvordan strukturere et spill i Python ved hjelp av klasser
- Implementering av kollisjonsdeteksjon mellom objekter
- Oppdateringsløkker, animasjon og hendelsesstyrt programmering
- Design av små, isolerte moduler for ulike spillkomponenter

📎 _Kode:_ [Se prosjekt på GitHub](https://github.com/Mrexes72/Asteroids)

---

## 🐍 Bookbot — Tekstanalyse i Python

Beskrivelse:
Et lite kommandolinjeverktøy som analyserer tekstfiler (for eksempel bøker) og genererer en rapport over ordtelling og bokstavfrekvens.
Prosjektet ble utviklet som en introduksjon til lokale CLI-applikasjoner i Python, med fokus på filhåndtering, strengbehandling og bruk av moduler.

Teknologi og verktøy:

- Python
- Kommandolinje (CLI)
- Filhåndtering og datastrukturer (dict, list)
- Funksjonsdeling og modulstruktur

Hva jeg lærte:  
Gjennom prosjektet fikk jeg erfaring med hvordan man:

- Leser og prosesserer tekstfiler i Python
- Bruker ordbøker og lister for statistisk analyse
- Skriver modulær og gjenbrukbar kode (import av stats.py)
- Lager et ryddig brukergrensesnitt i terminalen

📎 _Kode:_ [Se prosjekt på GitHub](https://github.com/Mrexes72/bookbot)

Flere prosjekter kommer snart 🚧
