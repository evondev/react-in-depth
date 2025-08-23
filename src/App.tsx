import ToggleSolution from "./components/react-patterns/render-props/solutions/toggle";
import { cn } from "./lib/utils";

function App() {
  return (
    <div className="flex gap-5 items-center">
      <ToggleSolution
        render={({ isOn, toggle }) => {
          return (
            <div className="flex h-6 items-center">
              <div
                className={cn(
                  "group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-indigo-500 transition-colors duration-200 ease-in-out has-focus-visible:outline-2",
                  {
                    "bg-indigo-500": isOn,
                  }
                )}
                onClick={toggle}
              >
                <span
                  className={cn(
                    "size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out",
                    {
                      "translate-x-3.5": isOn,
                    }
                  )}
                ></span>
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  checked={isOn}
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
          );
        }}
      />
      <ToggleSolution
        render={({ isOn, toggle }) => {
          return (
            <div className="flex h-6 items-center">
              <div
                className={cn(
                  "group relative inline-flex w-8 shrink-0 rounded-full bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-pink-500 transition-colors duration-200 ease-in-out has-focus-visible:outline-2",
                  {
                    "bg-pink-500": isOn,
                  }
                )}
                onClick={toggle}
              >
                <span
                  className={cn(
                    "size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out",
                    {
                      "translate-x-3.5": isOn,
                    }
                  )}
                ></span>
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  checked={isOn}
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
          );
        }}
      />
      <ToggleSolution
        render={({ isOn, toggle }) => {
          return (
            <div className="flex h-6 items-center">
              <div
                className={cn(
                  "group relative inline-flex w-8 shrink-0 rounded-xs bg-white/5 p-px inset-ring inset-ring-white/10 outline-offset-2 outline-orange-500 transition-colors duration-200 ease-in-out has-focus-visible:outline-2",
                  {
                    "bg-orange-500": isOn,
                  }
                )}
                onClick={toggle}
              >
                <span
                  className={cn(
                    "size-4 rounded-xs bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out",
                    {
                      "translate-x-3.5": isOn,
                    }
                  )}
                ></span>
                <input
                  id="agree-to-policies"
                  type="checkbox"
                  name="agree-to-policies"
                  aria-label="Agree to policies"
                  checked={isOn}
                  className="absolute inset-0 appearance-none focus:outline-hidden"
                />
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
