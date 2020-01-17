const { gql } = require('apollo-server');
 
const typeDefs = gql`
 type Query {
   walletTable: [Wallet!]!
 }
 
 type Wallet {
   profile: ClientProfile
   walletStatus: WalletStatus
   absoluteReturn: String
   relativeReturn: String
   annualVolatility: String
   sharpe: Int
   balance: Int
   patrimony: Int
   actions: [Action!]!
 }
 
 type ClientProfile {
   url: String
   name: String
   email: String
 }
 
 type Action {
   type: String
   clientId: String
   icon: String
   tooltip: String
 }
 
 type WalletStatus {
   chartData: Int
   text: String
   icon: String
   type: String
 }
`;
 
module.exports = typeDefs;
 