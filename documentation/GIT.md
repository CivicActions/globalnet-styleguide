# Git Workflow

## Prerequisites

1. [Git 2.0+](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
1. A Github account that is part of the CivicActions org [CivicActions' Github](https://github.com/CivicActions)

## Initial setup

The initial setup *should* only need to be done once at the outset of the project or when building a new local sandbox.

### Clone Repo

1. Enter `cd ~/workspace/living-styleguide` (or the location of the repo on your local sandbox) in your terminal to change your work
directory to the repo.
1. Enter `git clone ssh://git@github.com:CivicActions/globalnet-styleguide.git` to clone the repo locally.

### Create fork

1. Go to [the Styleguide repo](https://github.com/CivicActions/globalnet-styleguide) in your browser.
1. Click the `fork` button to initiate the fork of the repo.
1. Click the `name, image, or icon` of your user to create your fork of the project.
1. Enter `cd ~/workspace/living-styleguide` (or the location of the repo on your local sandbox) in your terminal to change your work
directory to the repo.
1. Enter `git remote add myfork git@github.com:GITHUB_USERNAME/globalnet-styleguide.git` to add your fork as a
remote.

### Configure Upstream

1. Enter `cd ~/workspace/styleguide` (or the location of the repo on your local sandbox) in your terminal to change your work
directory to the repo.
1. Enter `git remote rename origin prime` to rename the original remote.
1. Enter `git remote set-url --push prime no-pushing` to disable pushing to the prime remote.
1. Enter `git remote -v` to verify your remotes.
1. See `fetch` and `push` returned for `myfork`, and `fetch` only for `prime` (prime push should return `no-pushing`).
