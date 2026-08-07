export default function ErrorMessage({ message }) {
  return (
    <div className="glass rounded-2xl p-6 text-center text-red-400">
      <p>⚠️ Erreur : {message}</p>
    </div>
  );
}