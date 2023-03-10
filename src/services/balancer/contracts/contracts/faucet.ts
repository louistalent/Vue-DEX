import FaucetAbi from '@/lib/abi/Faucet.json';
import { configService } from '@/services/config/config.service';
import { walletService as walletServiceInstance } from '@/services/web3/wallet.service';

export class Faucet {
  constructor(
    private readonly abi = FaucetAbi,
    private readonly config = configService,
    private readonly walletService = walletServiceInstance,
    public readonly address = config.network.addresses.faucet
  ) {
    if (!this.address) console.error('Faucet address not set');
  }

  /**
   * @summary Drip token from faucet
   */
  async drip(tokenAddress: string) {
    return await this.walletService.txBuilder.contract.sendTransaction({
      contractAddress: this.address,
      abi: this.abi,
      action: 'drip',
      params: [tokenAddress],
    });
  }
}

export const faucet = new Faucet();
