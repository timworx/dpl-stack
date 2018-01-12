# cd into the a script directory
_BASH_SOURCE_REL_DIR=`pwd`

function cd_bash_source() {
    local _BASH_SOURCE="$1"
    cd "$( cd $_BASH_SOURCE_REL_DIR && cd "$( dirname "${_BASH_SOURCE[0]}" )" && pwd )"
}

cd_bash_source $BASH_SOURCE

pipenv --venv || pip install -r bootstrap-requirements.txt
pipenv install
pipenv shell

