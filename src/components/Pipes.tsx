interface PipesProps {
  text: string;
}

export function Pipes({ text }: PipesProps) {
  const parts = text
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);

  return (
    <>
      {parts.map((part, index) => (
        <span key={part}>
          {index > 0 && (
            <>
              {" "}
              <span style={{ color: "var(--muted-foreground)" }}>|</span>{" "}
            </>
          )}
          {part}
        </span>
      ))}
    </>
  );
}
