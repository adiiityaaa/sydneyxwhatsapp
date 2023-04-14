import { BingChat } from 'bing-chat';
const api = new BingChat({ cookie: "1UmRpAr2jW7A543YRPVE4iAQOVUe9i_zHGt5YKU5b2uvf3HEpmNPOY571plhR6pgVoeJYXTLPTdYFel9d44YPWsK2UYAm6OA5I75EKFdnq6a2P4GmDT7stpMVTKWiszMwBmpKYRMenegBGloadslPrSbpqdHpipqxv5XaMN2PLS6JAvm1I_QEBwl7RCEvTuC-pUBpp9ZjbKpqmpqwQy4mgg" });
async function ai(msg) {
    const result = await api.sendMessage(`${msg.body}`);
    return result.text;
}
export { ai };