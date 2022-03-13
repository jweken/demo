# Markdown Syntax

[link1][##[1]]

## Headings

**H1** #        Heading H1
**H2** ##       Heading H2

## Emphasis

_ITALIC with_sterisks_or underscores._

**STRONG** with **asterisks** or **underscores**

## Lists

* Unordered
  * For indentation use two leading spaces
  * For line-break use two trailing spaces.

1. Ordered list  
  1.1 ordered-sublist

2. yyy

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   **Note that this line is separate, but within the same paragraph.**  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Minus-list  
  a list (unordered)  
  that has an indented paragraph  

  * minus sublist  
    a minus sublist with indentation
  ---

## Links

[**LOCAL file main.d.ts**](<js/src/main.d.ts>)
