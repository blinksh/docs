import { Callout } from 'nextra-theme-blinkshell'

# Bookmarked Locations

Blink Shell’s Bookmarked Locations bridge the gap between powerful CLI tools and seamless integration with the rest of your iOS environment. With Bookmarked Locations, you can create symlinks that act as shortcuts to key directories. Bookmarks allow you to connect Blink to remote systems or even file locations from other apps:

- **Remote Location Bookmarks**: Use Blink Shell local tools with remote files systems. Whether you're editing files with `vim` or finding files in remote locations, these bookmarks ensure that remote files are just as accessible as local ones.  
- **Bookmarks to Other Apps**: Link to file locations exposed by other applications and integrate them into your Blink workflows. Automate tasks or use shell tools to manage these files without needing to leave Blink. 

In this article, we’ll guide you through how to set up and use Bookmarked Locations.  

<Callout>
This feature replaces the previous `link-files` command, which did not persist locations between app reboots.
</Callout>

## How to Create Bookmarks

Creating bookmarks allows you to access specific locations from remote systems or other apps directly within Blink Shell:

1. **Open the Bookmarks Settings**: Navigate to **Settings > Bookmarks** in Blink Shell.

2. **Add a New Bookmark**: Tap on "Create New Bookmark" to start the process.

3. **Select the Location**: Choose a directory from the Files.app browser. This can be a folder on a remote system or a file location exposed by another app. Tap **Open** once the location is selected.

4. **Name the Bookmark**: Assign a clear and descriptive name to the symlink that will represent the bookmark. This name will appear in your shell.

<img src="/gifs/bookmarks_create_location.gif" style={{maxWidth: "75%"}} />

5. **Access the Bookmark in the Shell**:  
   Once created, the bookmark will be available as a symlink in your Home folder. Use Blink’s CLI tools like `cd`, `ls`, `cat`, or `vim` to navigate, view, and edit files within the bookmarked location directly from the shell.

<img src="/gifs/bookmarks_use_with_shell.gif" style={{maxWidth: "75%"}} />

Please note, the symlink name or location the bookmark points to cannot be changed after creation. To modify a bookmark, delete the existing one swiping left and then create a new one with the desired new name or new location.

For remote bookmarks, be cautious when performing operations that may traverse large directories or access many files at once. Commands like `grep` or tools that recursively scan directories can trigger extensive downloads, consuming significant network bandwidth and time. Use such commands thoughtfully to avoid unnecessary overhead.