Testing notes

** BaseButton
- Does it render (deep? shallow/snapshot?)
- Does it run a function when pressed?
- Does it contain a Button component?
- Does it contain a Text element?

** BaseNotification
- Does it render (deep? shallow/snapshot?)
- Does it contain Card, CardItem, Body, Text components?
- I guess you could test whether it renders the text passed in?
    - is that useful and necessary?

** FormInput
- Does it render (deep? shallow/snapshot?)
- 
- 

** PasswordGenerator
- 
- 
- 

1. Do away with deep snapshots-- doesn't make sense
2. Include functionality tests
3. Look at what a dive() function renders versus non-dive. 