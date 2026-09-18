\# Git Team Sync Lab Workflow Q\&A



\### 1. What did the rejected push error message tell you, and why did it happen?

The error message (`updates were rejected because the remote contains work that you do not have locally`) indicated that the remote branch had commits that were missing from our local repository. This happened because another clone/developer pushed changes to `origin/feature/loyalty-points` after we last fetched, causing our local branch to lag behind the remote tracking branch.



\### 2. What's the actual difference between how you resolved Task 3 (merge) vs Task 4 (rebase)?

\* \*\*Task 3 (Merge):\*\* Created a non-linear history by combining remote and local branches via a explicit "merge commit," preserving the exact historical sequence of when commits occurred.

\* \*\*Task 4 (Rebase):\*\* Rewrote history by moving local commits on top of the updated remote branch (`origin/feature/loyalty-points`), producing a clean, single linear sequence without adding an extra merge commit.



\### 3. What one habit would have avoided both rejected pushes in this lab?

Always running `git fetch` or `git pull` before making local changes or pushing to a shared remote branch.



\### 4. Which approach - merge or rebase - would you default to on a shared team branch, and why?

\*\*Merge\*\* is the safer default on shared public branches because it does not rewrite public history that other teammates might have already pulled. \*\*Rebase\*\* is best used locally or on personal feature branches to maintain a clean linear commit history before integrating into a shared main branch.

