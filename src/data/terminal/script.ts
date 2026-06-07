import { cmd, links, loader, neofetchFromConfig, richStr } from './builders';
import { terminalConfig } from './config';

export const terminalCommands = [
  cmd('$ whoami', richStr(terminalConfig.whoami)),
  cmd('$ hostname', richStr(terminalConfig.hostname)),
  cmd('$ cat /etc/motd', ...terminalConfig.motd.map(richStr)),
  cmd('$ uptime', richStr(terminalConfig.uptime)),
  cmd('$ history --oneline', ...terminalConfig.history.map(richStr)),
  cmd(
    '$ neofetch --mini',
    loader(
      terminalConfig.neofetchLoader.variant,
      terminalConfig.neofetchLoader.label,
    ),
    ...neofetchFromConfig(),
  ),
  cmd('$ cat interests.txt', richStr(terminalConfig.interests)),
  cmd('$ ls ./links', links()),
  cmd('$ echo "that\'s all for now ✦"', richStr(terminalConfig.echo)),
] as const;
