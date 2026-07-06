export default function MarqueeTicker() {
  const items = [
    "Saudi Arabia",
    "UAE",
    "Qatar",
    "Kuwait",
    "Oman",
    "Germany",
    "Poland",
    "Romania",
    "Hungary",
    "License 2193/RWP",
    "Shamsabad, Murree Road, Rawalpindi",
    "Overseas Recruitment",
  ];

  return (
    <div className="bg-primary text-white py-2.5 overflow-hidden mt-[60px] sm:mt-[68px]">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* First set */}
        {items.map((item, i) => (
          <span key={i} className="mx-6 text-sm font-medium inline-flex items-center gap-2">
            <i className="fas fa-star text-accent text-[8px]"></i>
            {item}
          </span>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="mx-6 text-sm font-medium inline-flex items-center gap-2">
            <i className="fas fa-star text-accent text-[8px]"></i>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}