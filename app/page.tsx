export default function Home() {
  return (
    <div style={{ padding: 60, maxWidth: 640, margin: "0 auto" }}>
      <h1>Next.js Web Builder — Starter</h1>
      <p>Coba dua rute ini:</p>
      <ul>
        <li>
          <code>/edit/home</code> — editor drag & drop untuk slug "home"
        </li>
        <li>
          <code>/home</code> — hasil publikasi halaman "home" (setelah kamu
          klik Publish di editor)
        </li>
      </ul>
      <p>
        Ganti "home" dengan slug apa saja — halaman baru otomatis kebentuk,
        tidak perlu bikin file baru.
      </p>
    </div>
  );
}
