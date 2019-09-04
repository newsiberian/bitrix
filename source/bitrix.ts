// tslint:disable:object-literal-sort-keys

import Client from './client'
import ContactsService from './services/contacts'
import DealsService from './services/deals'
import LeadsService from './services/leads'
import StatusesService from './services/statuses'

export default (restUri: string, accessToken: string) => {
  const { call, batch, list } = Client(restUri, accessToken)

  return {
    call,
    batch,
    list,
    contacts: ContactsService({ call, list }),
    deals: DealsService({ call, list }),
    leads: LeadsService({ call, list }),
    statuses: StatusesService({ call, list })
  }
}
