export interface D1Result<T> {
  results: T[];
  success: boolean;
  meta: { duration: number; rows_read: number; rows_written: number };
}

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = unknown>(col?: string): Promise<T | null>;
  run<T = unknown>(): Promise<D1Result<T>>;
  all<T = unknown>(): Promise<D1Result<T>>;
}

export interface D1Database {
  prepare(sql: string): D1PreparedStatement;
  dump(): Promise<ArrayBuffer>;
  batch<T = unknown>(statements: D1PreparedStatement[]): Promise<D1Result<T>[]>;
}

export function paginate(page = 1, pageSize = 20) {
  const safePage = Math.max(1, page);
  const safeSize = Math.min(Math.max(1, pageSize), 100);
  return { offset: (safePage - 1) * safeSize, limit: safeSize };
}

export function buildWhereClause(conditions: { sql: string; params: unknown[] }[]) {
  const valid = conditions.filter(c => c.params.length > 0);
  if (valid.length === 0) return { clause: '', params: [] };
  return {
    clause: 'WHERE ' + valid.map(c => c.sql).join(' AND '),
    params: valid.flatMap(c => c.params),
  };
}
