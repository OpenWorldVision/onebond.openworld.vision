import { Networks } from "./blockchain";

const AVAX_MAINNET = {
    DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C",
    MEMO_ADDRESS: "0x136Acd46C134E8269052c62A67042D6bDeDde3C9",
    XBLADE_ADDRESS: "0x28ad774c41c229d48a441b280cbf7b5c5f1fed2b",
    MIM_ADDRESS: "0x78867bbeef44f2326bf8ddd1941a4439382ef2a7",
    STAKING_ADDRESS: "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9",
    STAKING_HELPER_ADDRESS: "0x096BBfB78311227b805c968b070a81D358c13379",
    TIME_BONDING_CALC_ADDRESS: "0x1e77592a14af405475c6eba853d0648E3563c1b8",
    TREASURY_ADDRESS: "0x1c46450211CB2646cc1DA3c5242422967eD9e04c",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WMEMO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
};

const BSC_MAINNET = {
    DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C",
    MEMO_ADDRESS: "0x136Acd46C134E8269052c62A67042D6bDeDde3C9",
    XBLADE_ADDRESS: "0x27a339d9b59b21390d7209b78a839868e319301b",
    MIM_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    STAKING_ADDRESS: "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9",
    STAKING_HELPER_ADDRESS: "0x096BBfB78311227b805c968b070a81D358c13379",
    TIME_BONDING_CALC_ADDRESS: "0x1e77592a14af405475c6eba853d0648E3563c1b8",
    TREASURY_ADDRESS: "0x1c46450211CB2646cc1DA3c5242422967eD9e04c",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WMEMO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
};

const HARMONY_MAINNET = {
    DAO_ADDRESS: "0x78a9e536EBdA08b5b9EDbE5785C9D1D50fA3278C",
    MEMO_ADDRESS: "0x136Acd46C134E8269052c62A67042D6bDeDde3C9",
    XBLADE_ADDRESS: "0x27a339d9b59b21390d7209b78a839868e319301b",
    MIM_ADDRESS: "0xe9e7cea3dedca5984780bafc599bd69add087d56",
    STAKING_ADDRESS: "0x4456B87Af11e87E329AB7d7C7A246ed1aC2168B9",
    STAKING_HELPER_ADDRESS: "0x096BBfB78311227b805c968b070a81D358c13379",
    TIME_BONDING_CALC_ADDRESS: "0x1e77592a14af405475c6eba853d0648E3563c1b8",
    TREASURY_ADDRESS: "0x1c46450211CB2646cc1DA3c5242422967eD9e04c",
    ZAPIN_ADDRESS: "0x9ABE63C5A2fBcd54c8bAec3553d326356a530cae", //"0xb98007C04f475022bE681a890512518052CE6104",
    WMEMO_ADDRESS: "0x0da67235dD5787D67955420C84ca1cEcd4E5Bb3b",
};

export const getAddresses = (networkID: number) => {
    if (networkID === Networks.AVAX) return AVAX_MAINNET;
    if (networkID === Networks.BSC_MAINNET) return BSC_MAINNET;
    if (networkID === Networks.HARMONY) return HARMONY_MAINNET;

    throw Error("Network don't support");
};
