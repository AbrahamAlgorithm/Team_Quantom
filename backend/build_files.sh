pip install --upgrade pip
pip install -r requirements.txt
python3.9 manage.py collectstatic --no-input --clear
python3.9 manage.py migrate
