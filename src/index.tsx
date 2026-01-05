import { createCliRenderer, TextAttributes } from "@opentui/core";
import { createRoot } from "@opentui/react";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

const VERSION = "1.0.0";

await yargs(hideBin(process.argv))
  .scriptName("katana")
  .version(VERSION)
  .alias("v", "version")
  .help()
  .alias("h", "help")
  .usage("Katana - Sharp. Precise. Powerful.\n\nUsage: $0 [options]")
  .example("$0", "Start Katana TUI")
  .example("$0 --version", "Show version")
  .parse();

const brandAscii = `
██╗  ██╗ █████╗ ████████╗ █████╗ ███╗   ██╗ █████╗
██║ ██╔╝██╔══██╗╚══██╔══╝██╔══██╗████╗  ██║██╔══██╗
█████╔╝ ███████║   ██║   ███████║██╔██╗ ██║███████║
██╔═██╗ ██╔══██║   ██║   ██╔══██║██║╚██╗██║██╔══██║
██║  ██╗██║  ██║   ██║   ██║  ██║██║ ╚████║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝`;

const katana = `       ___
      /   \\
═════════════════════════════════════════════════════>
      \\___/`;

function App() {
  return (
    <box flexDirection="column" flexGrow={1}>
      <box alignItems="center" justifyContent="center" flexGrow={1}>
        <box justifyContent="center" alignItems="center" flexDirection="column" gap={2}>
          <text fg="#C0C0C0">{brandAscii}</text>
          <text fg="#C0C0C0">{katana}</text>

          <box
            flexDirection="column"
            backgroundColor="#1a1a1a"
            width={60}
            padding={1}
          >
            <input
              placeholder='Ask anything... "What is the tech stack of this project?"'
              placeholderColor="#666666"
              width="100%"
              focused
            />
            <box flexDirection="row" gap={1} marginTop={1}>
              <text fg="#4a9eff">Katana</text>
              <text fg="#888888">Sharp. Precise. Powerful.</text>
            </box>
          </box>

          <box flexDirection="row" gap={2}>
            <box flexDirection="row" gap={1}>
              <text fg="#ffffff" attributes={TextAttributes.BOLD}>tab</text>
              <text fg="#666666">switch mode</text>
            </box>
            <box flexDirection="row" gap={1}>
              <text fg="#ffffff" attributes={TextAttributes.BOLD}>ctrl+p</text>
              <text fg="#666666">commands</text>
            </box>
          </box>
        </box>
      </box>

      <box
        flexDirection="row"
        justifyContent="space-between"
        paddingLeft={2}
        paddingRight={2}
        height={1}
        backgroundColor="#000000"
      >
        <box flexDirection="row" gap={2}>
          <text fg="#666666">~/workspace/katana:main</text>
          <text fg="#4a9eff">⚙ ready</text>
        </box>
        <text fg="#666666">v{VERSION}</text>
      </box>
    </box>
  );
}

const renderer = await createCliRenderer({
  backgroundColor: "#000000",
});
renderer.setTerminalTitle("Katana");
createRoot(renderer).render(<App />);
