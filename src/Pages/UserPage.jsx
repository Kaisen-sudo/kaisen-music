// Page simplifiée (les endpoints utilisateur nécessitent OAuth)
export default function UserPage() {
  return (
    <div className="glass rounded-2xl p-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Profil</h1>
      <p className="opacity-70">Connectez-vous pour accéder à vos playlists et favoris.</p>
      <button className="mt-4 px-6 py-2 bg-kaisen-cyan text-black rounded-full font-semibold hover:scale-105 transition-transform">
        Se connecter avec Audiomack
      </button>
    </div>
  );
}
