export default function FormatCode() {
  return (
    <pre className="w-full break-words overflow-x-auto whitespace-pre-wrap">
      {JSON.stringify(window.Telegram?.WebApp, my first app, 2)}
    </pre>
  )
}
