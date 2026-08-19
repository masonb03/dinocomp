import { clearQueue } from "../redux/quereSlice";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import SizeChart from "../components/SizeChart";

const Compare = () => {
  const dispatch = useDispatch();
  const queue = useSelector((state: RootState) => state.queue.species);
  const navigate = useNavigate();

  // Returns tailwind classes instead of inline styles, keyed to the acid/rust pill system.
  const rankClasses = (values: number[], current: number) => {
    const sorted = [...values].sort((a, b) => b - a);

    if (current === sorted[0]) {
      return {
        pill: "bg-acid text-bg-deep",
        bar: "bg-acid w-full",
      };
    }
    if (current === sorted[1]) {
      return {
        pill: "border border-rust text-rust bg-transparent",
        bar: "bg-rust",
      };
    }
    return {
      pill: "text-stone",
      bar: "bg-stone opacity-40",
    };
  };

  const barWidth = (values: number[], current: number) => {
    const max = Math.max(...values);
    return max === 0 ? "0%" : `${(current / max) * 100}%`;
  };

  const maxLength = queue.length
    ? Math.max(...queue.map((s) => s.lengthM))
    : 0;
  const rulerMax = Math.ceil((maxLength || 10) / 10) * 10;
  const rulerTicks = Array.from({ length: 5 }, (_, i) => Math.round((rulerMax / 4) * i));

  return (
    <div className="flex min-h-screen flex-col bg-bg-deep lg:h-full lg:min-h-0">

      {/* Header */}
      <div className="
        flex
        flex-wrap
        items-center
        gap-3
        sm:gap-5
        p-3
        sm:p-4
        bg-bg-deep
        border-b
        border-border
      ">
        <button
          className="
            font-mono
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-wider
            border
            border-border
            hover:border-stone
            hover:bg-surface
            transition
            text-bone
            px-4
            sm:px-5
            py-2
            rounded-full
            whitespace-nowrap
            cursor-pointer
          "
          onClick={() => navigate("/browse")}
        >
          ← Browse
        </button>

        <div className="flex flex-col gap-0.5">
          <span className="
            font-mono
            text-[10px]
            sm:text-[11px]
            uppercase
            tracking-widest
            text-rust
          ">
            {queue.length} Specimen{queue.length === 1 ? "" : "s"} Selected
          </span>
          <h1 className="
            font-display
            font-extrabold
            uppercase
            text-lg
            sm:text-2xl
            leading-none
            text-bone
          ">
            Comparing Species
          </h1>
        </div>

        <button
          className="
            font-mono
            text-xs
            sm:text-sm
            font-semibold
            uppercase
            tracking-wider
            border
            border-rust/30
            hover:border-rust
            hover:bg-rust/10
            transition
            text-rust
            px-4
            sm:px-5
            py-2
            rounded-full
            whitespace-nowrap
            cursor-pointer
            ml-auto
          "
          onClick={() => dispatch(clearQueue())}
        >
          Clear All
        </button>
      </div>

      {/* Ruler strip */}
      <div className="
        hidden
        sm:flex
        items-end
        h-6
        px-4
        border-b
        border-border
        bg-bg-deep
      ">
        {rulerTicks.map((tick, i) => (
          <div
            key={i}
            className="flex-1 border-l border-border h-2 relative first:border-l-stone"
          >
            <span className="
              absolute
              -top-4
              left-1
              font-mono
              text-[9px]
              text-stone
              tracking-wide
            ">
              {tick}m
            </span>
          </div>
        ))}
      </div>

      {/* Comparison Content */}
      <div className="
        flex-1
        min-h-0
        min-w-0
        overflow-y-auto
        p-2
        sm:p-4
        pb-6
      ">

        <div className="
          w-full
          overflow-x-auto
          rounded-2xl
          border
          border-border
          bg-surface
        ">
          <table className="
            w-full
            min-w-162.5
            table-auto
            border-collapse
          ">
            <thead className="border-b border-border">
              <tr>
                <th className="
                  text-left
                  p-2
                  sm:p-3
                  text-stone
                  w-24
                  sm:w-32
                " />

                {queue.map((s) => (
                  <th
                    key={s.id}
                    className="
                      group
                      p-2
                      sm:p-3
                      pt-4
                      sm:pt-5
                      text-center
                      min-w-32.5
                      sm:min-w-40
                    "
                  >
                    {s.imageUrl && (
                      <div className="flex items-end justify-center h-14 mb-2">
                        <img
                          src={s.imageUrl}
                          alt={s.commonName}
                          className="
                            h-full
                            w-auto
                            object-contain
                            opacity-80
                            group-hover:opacity-100
                            transition
                          "
                        />
                      </div>
                    )}

                    <span className="
                      block
                      font-display
                      font-bold
                      uppercase
                      text-bone
                      text-sm
                      sm:text-base
                    ">
                      {s.commonName}
                    </span>

                    <span className="
                      block
                      font-sans
                      italic
                      text-stone
                      text-[10px]
                      sm:text-xs
                      mt-1
                    ">
                      {s.scientificName}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="border-b border-border">

              {/* Period */}
              <tr className="border-b border-border">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                ">
                  Period
                </td>

                {queue.map((s) => (
                  <td
                    key={s.id}
                    className="
                      p-2
                      sm:p-3
                      text-center
                      text-bone
                      text-xs
                      sm:text-sm
                      font-medium
                    "
                  >
                    {s.period}
                  </td>
                ))}
              </tr>

              {/* Diet */}
              <tr className="border-b border-border">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                ">
                  Diet
                </td>

                {queue.map((s) => (
                  <td
                    key={s.id}
                    className="
                      p-2
                      sm:p-3
                      text-center
                      text-bone
                      text-xs
                      sm:text-sm
                      font-medium
                    "
                  >
                    {s.diet}
                  </td>
                ))}
              </tr>

              {/* Length */}
              <tr className="border-b border-border border-l-2 border-l-rust">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                  border-l-2
                  border-l-rust
                ">
                  Length
                </td>

                {queue.map((s) => {
                  const values = queue.map((q) => q.lengthM);
                  const { pill, bar } = rankClasses(values, s.lengthM);

                  return (
                    <td
                      key={s.id}
                      className="p-2 sm:p-3 text-center"
                    >
                      <span
                        className={`
                          inline-block
                          rounded-full
                          px-3
                          py-1
                          font-mono
                          font-semibold
                          text-xs
                          sm:text-sm
                          whitespace-nowrap
                          ${pill}
                        `}
                      >
                        {s.lengthM}m
                      </span>
                      <div className="h-[3px] bg-border rounded-full mt-2 w-16 mx-auto overflow-hidden">
                        <div
                          className={`h-full rounded-full ${bar}`}
                          style={{ width: barWidth(values, s.lengthM) }}
                        />
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* Weight */}
              <tr className="border-b border-border">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                  border-l-2
                  border-l-rust
                ">
                  Weight
                </td>

                {queue.map((s) => {
                  const values = queue.map((q) => q.massKg);
                  const { pill, bar } = rankClasses(values, s.massKg);

                  return (
                    <td
                      key={s.id}
                      className="p-2 sm:p-3 text-center"
                    >
                      <span
                        className={`
                          inline-block
                          rounded-full
                          px-3
                          py-1
                          font-mono
                          font-semibold
                          text-xs
                          sm:text-sm
                          whitespace-nowrap
                          ${pill}
                        `}
                      >
                        {s.massKg}kg
                      </span>
                      <div className="h-[3px] bg-border rounded-full mt-2 w-16 mx-auto overflow-hidden">
                        <div
                          className={`h-full rounded-full ${bar}`}
                          style={{ width: barWidth(values, s.massKg) }}
                        />
                      </div>
                    </td>
                  );
                })}
              </tr>

              {/* Clade */}
              <tr className="border-b border-border">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                ">
                  Clade
                </td>

                {queue.map((s) => (
                  <td
                    key={s.id}
                    className="
                      p-2
                      sm:p-3
                      text-center
                      text-bone
                      text-xs
                      sm:text-sm
                      font-medium
                    "
                  >
                    {s.clade}
                  </td>
                ))}
              </tr>

              {/* Continent */}
              <tr className="border-b border-border">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                ">
                  Continent
                </td>

                {queue.map((s) => (
                  <td
                    key={s.id}
                    className="
                      p-2
                      sm:p-3
                      text-center
                      text-bone
                      text-xs
                      sm:text-sm
                      font-medium
                    "
                  >
                    {s.continent}
                  </td>
                ))}
              </tr>

              {/* Discovery */}
              <tr className="border-b border-border">
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                ">
                  Discovered
                </td>

                {queue.map((s) => (
                  <td
                    key={s.id}
                    className="
                      p-2
                      sm:p-3
                      text-center
                      text-bone
                      text-xs
                      sm:text-sm
                      font-medium
                    "
                  >
                    {s.discoveryYear}
                  </td>
                ))}
              </tr>

              {/* Description */}
              <tr>
                <td className="
                  p-2
                  sm:p-3
                  font-mono
                  text-stone
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-wider
                  align-top
                ">
                  Description
                </td>

                {queue.map((s) => (
                  <td
                    key={s.id}
                    className="
                      p-2
                      sm:p-3
                      text-left
                      text-stone
                      text-xs
                      sm:text-sm
                      leading-relaxed
                      align-top
                      min-w-40
                      sm:min-w-55
                    "
                  >
                    {s.description}
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>

        {/* Size Chart */}
        <div className="mt-6 w-full overflow-x-auto">
          <SizeChart queue={queue} />
        </div>

      </div>

      {/* Legend */}
      <div className="
        flex
        flex-wrap
        items-center
        gap-4
        sm:gap-6
        p-3
        sm:p-4
        font-mono
        text-[10px]
        sm:text-xs
        uppercase
        tracking-wider
        text-stone
        border-t
        border-border
      ">
        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-acid" />
          Highest value
        </span>

        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm border border-rust" />
          Second value
        </span>

        <span className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-sm bg-stone opacity-40" />
          Unhighlighted = lowest
        </span>
      </div>

    </div>
  );
};

export default Compare;