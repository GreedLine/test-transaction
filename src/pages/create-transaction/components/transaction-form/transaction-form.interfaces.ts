export enum participantsType {
  'physical' = 'physical',
  'juridical' = 'juridical'
}

export interface ParticipantType {
  value: string;
  viewValue: string;
}

export interface Deal {
  id: string,
  data: string,
  date: string,
}

export interface TransactionData {
  participantType: ParticipantType,
  participantsPhysical: ParticipantPhysical,
  deals: Array<Deal>
}

export interface Address {
  country: string,
  city: string,
  area: string,
  street: string,
}

export interface ParticipantPhysical {
  name: {
    firstName: string,
    middleName: string,
    lastName: string
  },
  address: Array<Address>,
  phone: string
}


