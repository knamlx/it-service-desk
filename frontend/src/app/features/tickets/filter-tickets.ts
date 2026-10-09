import { Ticket } from '../../models/ticket';

export type TicketFilter = 'all' | 'open' | 'new';

export function filterTickets(
  items: readonly Ticket[],
  mode: TicketFilter,
): Ticket[] {
  if (mode === 'all') return [...items];
  if (mode === 'open') return items.filter(item => item.status !== 'closed');
  return items.filter(item => item.status === 'new');
}
