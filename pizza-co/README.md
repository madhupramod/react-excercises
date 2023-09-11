# Pizza - co

## Desciption

This is a static website displaying a menu of Pizzas of a ficticious restaurant.

## Requirements

1. The page should contain a header displaying the name of ficticious company "Fast React Pizza Co".
2. The main content should contain the heading "our menu".
3. Below the heading there should be a text "Authetic italian cuisine. [number] creative dishes to choose from. All from our store oven, all organic, all delicious."[number] should change depending on the length of list of pizzas displayed in the menu.

4. Create a list of pizzas that should be displayed below the message in "3". In order to accomplish this

   - create a static list of pizzas with fields- "id" ,"name" ,"ingredients" ,"price" ,"issoldout" ,"imageurl".
   - a reusable pizza component should be used.
   - A separate component should handle the iteration through the list and creation of pizza component list.
   - The pizza component should display pizza image and pizza details side by side.
   - The pizza details should contain name, ingredients, and price.
   - All the fields in pizza component should be customizable.
   - The style of pizza component should change sepending on whether the pizza is sold out.

5. The footer should display a different message depending on the time of website visit
   - If the user visits after business hours, the message should read "We are currently closed. Please comeback between [open time] and [close time]".Open time and Close time should be replaced with store open time and close time respectively in 24 hr clock format [hh:mm].
   - else the message should say "We're open until [close time]. Come visit us or order online"
   - Show button with text "order online" if the user visits during open hours.

## Concepts demonstrated

- React basics
- React props
- Componenet decomposition
- Iterate over a list and generate components
- Conditional rendering

## References

[Ultimate React Course by Jonas schmedtmann](https://github.com/jonasschmedtmann/ultimate-react-course)
