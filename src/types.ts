
export interface Blog {
    _id: string;
    title: string;
    image:string;
    content: string;
  }
  
  export interface BlogsState {
    blogs: Blog[];
    singleBlog: Blog | null;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }
  
  export interface Comment {
    _id:string;
    visitor:string;
    comments:String;
  }

  export interface CommentState {
    comments: Comment[];
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
  }