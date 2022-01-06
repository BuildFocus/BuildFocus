# BuildFocus MVP

## Proposed Flow

- User creates a `site` and may optionally add metadata as arbitrary key value pairs.
- User navigates "into" a `site` and creates an `area`. A `site` can have one or more `area`s. An `area` may also have optional metadata as arbitrary key-value pairs input by the user.
- User navigates "into" an `area`, and takes a picture. The picture shall immediately be saved to the `Camera Roll`. The app shall save a UUID that uniquely identifies this image and save it into its data store.
- User can choose some UI element (or perhaps just tap the image similar to snapchat) to enter a note about the image. This note shall be saved in the data store along with the image's UUID
- User can take as many pictures and notes as desired, navigate back up the heirarchy, create additional `area`s and rinse and repeat as necessary.
- User selects some UI element at the `site` and/or `area` level to generate a PDF that lists all pictures along with their nodes in sections by `area`
