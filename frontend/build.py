import os
import sys
from shutil import copyfile
from subprocess import call


def run(command: str) -> None:
    print("$", command)
    call(command.split())


def main():
    # Remove already built assets
    run("rm -rf ./build")

    # Check that we receive an environment to build
    if len(sys.argv) < 2:
        raise Exception('Environment parameter required')

    # Delete an already existing env
    run('rm .env.production')

    env = sys.argv[1]

    # Copy the required environment to the production env
    if env == 'PROD':
        copyfile('.e.production', '.env.production')
    elif env == 'DEV':
        copyfile('.e.development', '.env.production')
    elif env == 'LOCAL':
        copyfile('.e.local', '.env.production')
    else:
        raise Exception('Invalid environment specified')

    # Build the assets down
    call("yarn install".split())
    call("yarn build-css".split())
    call("yarn build".split())

    # Remove any old assets
    run("rm -rf ../backend/react")
    run("mkdir ../backend/react")

    # Copy the generated JS to the backend
    os.chdir(os.path.join("build", "static", "js"))
    javascript_file_path = [name for name in os.listdir(".") if name[-3:] == ".js"][0]
    os.chdir("../../..")
    command = "cp build/static/js/%s ../backend/react/" \
        % javascript_file_path
    run(command)

    # Copy the generated CSS to the backend
    os.chdir(os.path.join("build", "static", "css"))
    css_file_path = [name for name in os.listdir(".") if name.endswith(".css")][0]
    os.chdir("../../..")
    command = "cp build/static/css/%s ../backend/react/" \
        % css_file_path
    run(command)


if __name__ == "__main__":
    main()
