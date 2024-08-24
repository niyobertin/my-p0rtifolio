
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

  export interface User{
    _id:string;
    username:string;
    email:string;
    password:string;
  }

  export interface UserState {
    user: User[];
    isLoading: boolean;
    error: string | null;
  }
  export interface Login{
    email:string;
    password:string;
  }

  export interface LoginState {
    user: User[];
    loading: boolean;
    error: string | null;
  }


  export interface ContactorDetails {
    _id:string;
    visitor:string;
    message:String;
  }
  export interface ContactState {
    messages: ContactorDetails[];
    loading: boolean;
    error: string | null;

  }