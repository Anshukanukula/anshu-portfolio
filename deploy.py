import os
import subprocess
import shutil

def deploy():
    print("--- 1. Building Vite React App ---")
    # Run npm run build
    build_res = subprocess.run("npm run build", shell=True)
    if build_res.returncode != 0:
        print("Build failed. Aborting deployment.")
        return

    dist_dir = "dist"
    if not os.path.exists(dist_dir):
        print("dist directory not found. Aborting.")
        return

    print("\n--- 2. Preparing git repository in dist/ ---")
    # Change directory to dist/
    original_cwd = os.getcwd()
    os.chdir(dist_dir)

    try:
        # Initialize temp git
        subprocess.run("git init", shell=True)
        # Create gh-pages branch
        subprocess.run("git checkout -b gh-pages", shell=True)
        # Add remote
        remote_url = "https://github.com/Anshukanukula/anshu-portfolio.git"
        subprocess.run(f"git remote add origin {remote_url}", shell=True)
        # Add files
        subprocess.run("git add .", shell=True)
        # Commit
        subprocess.run('git commit -m "Deploy to GitHub Pages"', shell=True)
        # Push force to gh-pages remote
        print("\n--- 3. Pushing build assets to GitHub Pages (gh-pages branch) ---")
        push_res = subprocess.run("git push -f origin gh-pages", shell=True)
        if push_res.returncode == 0:
            print("\nDeployment completed successfully!")
            print("Your portfolio should be live shortly at: https://Anshukanukula.github.io/anshu-portfolio/")
        else:
            print("\nDeployment failed during git push.")
    finally:
        os.chdir(original_cwd)

if __name__ == '__main__':
    deploy()
