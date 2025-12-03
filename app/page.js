export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", maxWidth: "600px", margin: "auto" }}>
      <h1>AI Video Analyzer</h1>
      <p>Upload a video and get AI-powered feedback.</p>

      <form action="/api/analyze" method="post" encType="multipart/form-data">
        <input type="file" name="video" accept="video/*" required />
        <br /><br />
        <button type="submit" style={{ padding: "10px 20px" }}>
          Analyze Video
        </button>
      </form>
    </main>
  );
}
