import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  getBlogList() { 
    
    return [
      {
        id: 1,
        title: "Say Yes",
        description: "'Say Yes is an award-winning blog created by Liz Stanley in 2006. Although it could be classified as a mom blog as well, since Liz is a mother of three, it goes beyond that, offering useful advice about other topics, including food, and travel.'",
        author: "Liz Stanley",
        comments: ["comments", "comments"]
      },
      {
        id: 2,
        title: "Rainbow Plant Life",
        description: "Nisha was a lawyer who wanted to focus on her other interests, so she decided to start a blog where she shares all kinds of vegan recipes. Apart from this successful blog, Nisha also boasts more than 400,000 followers on social media (including her YouTube channel)",
        author: "Nisha",
        comments: ["comments", "comments"]
      },
      {
        id: 3,
        title: "Style and Error",
        description: "'Style & Error is a men’s fashion blog by Thomas Stubbs, a famous stylist, editor, and writer. Apart from his blog, he also works as a Fashion Editor with British GQ and is an Editor at Large for The Rake magazine. Also, Stubbs is the main man behind the styles of many male celebrities.'",
        author: "Thomas Stubbs",
        comments: ["comments", "comments"]
      },
      {
        id: 4,
        title: " Tech Crack",
        description: "'Founded and managed by Romit Sharma, TechCrack covers all things related to technology, including gadgets, apps, gaming, business, news, and more. There’s even an attractive how-to section with useful advice for tech lovers. Romit has been an active blogger since 2012 when he started the TechCrack blog.'",
        author: "Romit Sharma",
        comments: ["comments", "comments"]
      },


    ];

  }
  
}
