import { Swap } from "../types/props/script";

export default function ReverseCurrency({ swapCurrencies }: Swap) {
  return (
    <div className="flex justify-center mb-1 mt-2">
      <button
        onClick={swapCurrencies}
        className="inline-flex rounded-full border border-solid border-gray-250 bg-gray-50 p-4 hover:bg-gray-150"
        aria-label="Swap currencies"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 17"
          aria-hidden="true"
          className="h-4 w-4 rotate-90 text-greyblue-400 md:rotate-0"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
  );
}
