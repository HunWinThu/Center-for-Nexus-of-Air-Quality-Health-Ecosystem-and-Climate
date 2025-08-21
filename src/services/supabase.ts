import { createClient } from '@supabase/supabase-js';

// Initialize the Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

// Generic fetch function with error handling
export async function fetchData<T>(
  table: string,
  query: {
    select?: string;
    eq?: Record<string, any>;
    order?: { column: string; ascending?: boolean };
    limit?: number;
  }
) {
  try {
    let queryBuilder = supabase
      .from(table)
      .select(query.select || '*');

    if (query.eq) {
      Object.entries(query.eq).forEach(([column, value]) => {
        queryBuilder = queryBuilder.eq(column, value);
      });
    }

    if (query.order) {
      queryBuilder = queryBuilder.order(
        query.order.column,
        { ascending: query.order.ascending }
      );
    }

    if (query.limit) {
      queryBuilder = queryBuilder.limit(query.limit);
    }

    const { data, error } = await queryBuilder;

    if (error) throw error;
    return data as T[];
  } catch (error) {
    console.error(`Error fetching data from ${table}:`, error);
    throw error;
  }
}

// Generic insert function with error handling
export async function insertData<T>(
  table: string,
  data: Partial<T>
) {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .insert(data)
      .select();

    if (error) throw error;
    return result[0] as T;
  } catch (error) {
    console.error(`Error inserting data into ${table}:`, error);
    throw error;
  }
}

// Generic update function with error handling
export async function updateData<T>(
  table: string,
  id: string | number,
  data: Partial<T>
) {
  try {
    const { data: result, error } = await supabase
      .from(table)
      .update(data)
      .eq('id', id)
      .select();

    if (error) throw error;
    return result[0] as T;
  } catch (error) {
    console.error(`Error updating data in ${table}:`, error);
    throw error;
  }
}

// Generic delete function with error handling
export async function deleteData(
  table: string,
  id: string | number
) {
  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('id', id);

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(`Error deleting data from ${table}:`, error);
    throw error;
  }
}
