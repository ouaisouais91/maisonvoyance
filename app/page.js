"use client";
export default function MaisonVoyanceSite() {
  const prestations = [
    {
      title: "Consultation sentimentale",
      desc: "Analyse d’une situation amoureuse, d’un lien existant ou d’une rencontre à venir.",
      price: "À personnaliser",
    },
    {
      title: "Guidance générale",
      desc: "Lecture plus globale pour éclairer vos choix de vie, votre énergie actuelle et vos blocages.",
      price: "À personnaliser",
    },
    {
      title: "Tirage express",
      desc: "Format plus court pour une question précise avec une réponse claire et rapide.",
      price: "À personnaliser",
    },
  ]

  const espaceClient = [
    "Création de compte",
    "Connexion sécurisée",
    "Historique des commandes",
    "Informations personnelles",
    "Prestations réservées",
    "Réponses personnalisées à venir",
  ]

  const etapes = [
    {
      step: "01",
      title: "Découvrir les prestations",
      desc: "Le visiteur consulte vos offres, lit vos descriptions et choisit l’accompagnement qui lui correspond.",
    },
    {
      step: "02",
      title: "Créer un compte",
      desc: "Le client peut s’inscrire, enregistrer ses informations et accéder à son espace personnel.",
    },
    {
      step: "03",
      title: "Commander ou réserver",
      desc: "Il peut passer commande, réserver une consultation et retrouver son historique dans son espace client.",
    },
    {
      step: "04",
      title: "Recevoir son accompagnement",
      desc: "Consultation, compte rendu, suivi, futures réponses personnalisées : toute la structure est déjà prévue.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#2f0f4a] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2f0f4a]/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-[#3d175f] ring-1 ring-white/10">
              <img
                src="/logo-maison-voyance.png"
                alt="Maison Voyance"
                className="h-12 w-12 object-contain"
              />
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-[#f1d48c]">Maison</p>
              <p className="text-lg font-light tracking-[0.2em]">Voyance</p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#prestations" className="transition hover:text-white">Prestations</a>
            <a href="#fonctionnement" className="transition hover:text-white">Fonctionnement</a>
            <a href="#espace-client" className="transition hover:text-white">Espace client</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#connexion"
              className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/90 transition hover:bg-white/5"
            >
              Connexion
            </a>
            <a
              href="#inscription"
              className="rounded-full bg-[#f1d48c] px-5 py-2 text-sm font-medium text-[#2f0f4a] transition hover:opacity-90"
            >
              Créer un compte
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(241,212,140,0.12),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_16%),radial-gradient(circle_at_80%_15%,rgba(210,150,255,0.12),transparent_20%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:px-6 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:py-28">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-[#f1d48c]">
                Guidance intuitive · Consultations · Structure prête à publier
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight md:text-6xl lg:text-7xl">
                Un site premium pour <span className="text-[#f1d48c]">Maison Voyance</span>,
                pensé pour vendre, rassurer et convertir.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Voici une première structure complète du site : page d’accueil, prestations,
                espace client, connexion, inscription et base prête pour évoluer plus tard avec
                tes vraies offres, tes paiements et tes automatisations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#prestations"
                  className="rounded-full bg-[#f1d48c] px-6 py-3 text-center font-medium text-[#2f0f4a] transition hover:opacity-90"
                >
                  Voir la structure
                </a>
                <a
                  href="#espace-client"
                  className="rounded-full border border-white/15 px-6 py-3 text-center text-white transition hover:bg-white/5"
                >
                  Voir l’espace client
                </a>
              </div>
            </div>

            <div className="relative z-10">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/20 backdrop-blur">
                <div className="rounded-[28px] border border-white/10 bg-[#3c1a5d] p-8">
                  <div className="mx-auto mb-8 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full bg-[#2f0f4a] ring-1 ring-white/10 md:h-44 md:w-44">
                    <img
                      src="/logo-maison-voyance.png"
                      alt="Logo Maison Voyance"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="space-y-4 text-center">
                    <p className="text-sm uppercase tracking-[0.4em] text-[#f1d48c]">Identité visuelle</p>
                    <h2 className="text-2xl font-semibold">Ambiance mystique, premium et rassurante</h2>
                    <p className="text-sm leading-7 text-white/70 md:text-base">
                      Le fond du site reprend volontairement la même tonalité violette que ton logo,
                      ce qui permet d’intégrer le visuel de façon cohérente avant même de le détourer proprement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="prestations" className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f1d48c]">Prestations</p>
            <h2 className="text-3xl font-semibold md:text-5xl">Une base de services que tu pourras modifier ensuite.</h2>
            <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
              Les prestations ci-dessous sont des exemples. Tu pourras changer les titres, les descriptions,
              les prix, ajouter des catégories ou supprimer des services plus tard sans refaire toute la structure.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {prestations.map((item) => (
              <article
                key={item.title}
                className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10"
              >
                <div className="mb-4 inline-flex rounded-full border border-[#f1d48c]/20 bg-[#f1d48c]/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#f1d48c]">
                  Prestation
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">{item.desc}</p>
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-white/10 bg-black/10 px-4 py-3">
                  <span className="text-sm text-white/60">Tarif</span>
                  <span className="font-medium text-[#f1d48c]">{item.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="fonctionnement" className="bg-black/10 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f1d48c]">Fonctionnement</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Le parcours client est déjà pensé dès la structure.</h2>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {etapes.map((item) => (
                <div key={item.step} className="rounded-[28px] border border-white/10 bg-white/5 p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#f1d48c] text-sm font-semibold text-[#2f0f4a]">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="espace-client" className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f1d48c]">Espace client</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Une vraie base pour l’inscription, la connexion et le compte client.</h2>
              <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
                Pour l’instant, on crée la structure visuelle et fonctionnelle. Ensuite, on branchera
                l’authentification, la base de données et l’historique des commandes. L’objectif ici est de te donner
                un site solide sur lequel construire sans repartir de zéro plus tard.
              </p>
            </div>

            <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/10">
              <h3 className="text-2xl font-semibold">Ce que l’espace client pourra contenir</h3>
              <div className="mt-6 grid gap-3">
                {espaceClient.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/85"
                  >
                    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f1d48c] text-xs font-bold text-[#2f0f4a]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div id="inscription" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f1d48c]">Page inscription</p>
              <h3 className="mt-3 text-2xl font-semibold">Créer un compte</h3>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Prénom</div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Email</div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Mot de passe</div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Date de naissance / signe astrologique</div>
              </div>
              <button className="mt-6 w-full rounded-full bg-[#f1d48c] px-5 py-3 font-medium text-[#2f0f4a]">
                Bouton d’inscription
              </button>
            </div>

            <div id="connexion" className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-[#f1d48c]">Page connexion</p>
              <h3 className="mt-3 text-2xl font-semibold">Se connecter</h3>
              <div className="mt-6 space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Email</div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Mot de passe</div>
              </div>
              <button className="mt-6 w-full rounded-full border border-white/15 bg-white/5 px-5 py-3 font-medium text-white">
                Bouton de connexion
              </button>
            </div>
          </div>
        </section>

        <section className="bg-black/10 py-16">
          <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="rounded-[36px] border border-white/10 bg-[linear-gradient(135deg,rgba(241,212,140,0.14),rgba(255,255,255,0.04))] p-8 md:p-10">
              <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                <div>
                  <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f1d48c]">Pages prévues</p>
                  <h2 className="text-3xl font-semibold md:text-5xl">La structure complète du site est déjà pensée.</h2>
                  <p className="mt-5 text-base leading-8 text-white/75 md:text-lg">
                    On pourra ensuite découper ça en vraies pages et les connecter entre elles proprement dans le projet.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    "Accueil",
                    "Prestations",
                    "À propos",
                    "Contact",
                    "Connexion",
                    "Inscription",
                    "Espace client",
                    "Historique des commandes",
                  ].map((page) => (
                    <div key={page} className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/85">
                      {page}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-[#f1d48c]">Contact</p>
              <h2 className="text-3xl font-semibold md:text-5xl">Une base prête à publier, puis à améliorer ensemble.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Cette première version sert de socle. Ensuite, on pourra remplacer les prestations fictives,
                brancher la vraie connexion, la base de données, les paiements et automatiser certaines réponses.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <div className="space-y-3">
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Nom</div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Email</div>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-3 text-white/55">Message</div>
              </div>
              <button className="mt-6 w-full rounded-full bg-[#f1d48c] px-5 py-3 font-medium text-[#2f0f4a]">
                Envoyer ma demande
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#2a0d42]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
          <p>© Maison Voyance — Structure initiale du site</p>
          <div className="flex flex-wrap gap-4">
            <span>Mentions légales</span>
            <span>Politique de confidentialité</span>
            <span>CGV</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

