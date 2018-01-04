# /bin/bash
docker run -v /volume/justcopy-staging/posts:/_posts -v /home/howard/docker/justcopy_frontend/containers:/jekyll -p 4123:4000 -it justcopy_frontend_test /bin/bash
