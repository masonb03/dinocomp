import { useEffect, useMemo, useRef } from "react";

export function SlotDigit({ digit, delay }: { digit: number; delay: number }) {
  const stripRef = useRef<HTMLDivElement>(null);

  const sequence = useMemo(
    () => Array.from({ length: 22 }, () => Math.floor(Math.random() * 10)).concat(digit),
    [digit]
  );

  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const digitHeight = 48;
    const finalOffset = (sequence.length - 1) * digitHeight;

    strip.style.transform = "translateY(0)";
    strip.style.transition = "none";

    const timeout = setTimeout(() => {
      strip.style.transition = "transform 1.6s cubic-bezier(0.12, 0.85, 0.18, 1)";
      strip.style.transform = `translateY(-${finalOffset}px)`;
    }, delay);

    return () => clearTimeout(timeout);
  }, [digit, delay, sequence]);

  return (
    <div className="h-12 overflow-hidden inline-block">
      <div ref={stripRef} className="flex flex-col">
        {sequence.map((d, i) => (
          <span key={i} className="h-12 leading-[48px] text-4xl font-medium text-acid block">
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SlotNumber({ value, baseDelay = 200 }: { value: number; baseDelay?: number }) {
  const digits = String(value).split("").map(Number);
  return (
    <div className="inline-flex">
      {digits.map((d, i) => (
        <SlotDigit key={i} digit={d} delay={baseDelay + i * 120} />
      ))}
    </div>
  );
}