type WahasoPartnerMarkProps = {
  className?: string;
};

export default function WahasoPartnerMark({
  className = "",
}: WahasoPartnerMarkProps) {
  return (
    <div
      className={`flex items-center gap-3 border-l border-lime-300/70 pl-3 ${className}`}
    >
      <span className="text-[10px] font-bold tracking-[0.16em] text-slate-400">
        TECHNOLOGY PARTNER
      </span>

      <img
        src="https://wahaso.com/wp-content/uploads/wahaso-commercial-water-harvesting-solutions-wht-logo-r.webp"
        alt="Wahaso Water Harvesting Solutions"
        className="h-auto w-24 object-contain sm:w-28"
      />
    </div>
  );
}