init:
	docker-compose up -d
	docker system prune -a -f --volumes

frontend1:
	docker-compose up -d webapp
	docker system prune -a -f --volumes
	  
backend1:
	docker-compose up -d api
	docker system prune -a -f --volumes

nginx1:
	docker-compose up -d nginx
	docker system prune -a -f --volumes

rebuild:
	docker-compose up -d --force-recreate --build
	docker system prune -a -f --volumes

clean:
	docker rm -f $$(docker ps -a -q)
	docker system prune -a -f --volumes

reset:
	docker rm -f $$(docker ps -a -q)
	docker system prune -a -f --volumes

.PHONY: init rebuild clean reset
