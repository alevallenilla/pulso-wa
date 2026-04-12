const pills = [
  "WhatsApp Business API",
  "Official Meta Technology Partner",
  "Available across Latin America",
  "End-to-end encrypted",
];

const AnnouncementBar = () => {
  return (
    <div className="pt-16 bg-background" style={{ borderBottom: "0.5px solid #0d2010" }}>
      <div className="flex items-center justify-center gap-4 px-6 py-2.5 flex-wrap">
        {pills.map((text) => (
          <div key={text} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] flex-shrink-0" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">{text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
