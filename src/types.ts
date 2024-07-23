
export interface Blog {
    id: string;
    title: string;
    image:string;
    content: string;
  }
  
  export interface BlogsState {
    blogs: Blog[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  