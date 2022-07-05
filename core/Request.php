<?php

namespace app\core;

class Request
{

    public function getPath()
    {
        $path = $_SERVER['REQUEST_URI'] ?? '/';
        $position = strpos($path, '?');

        if ($position === false) {
            return $path;
        }

        $path = substr($path, 0, $position);
        return $path;
    }

    public function method()
    {
        return strtolower($_SERVER['REQUEST_METHOD']);
    }

    public function isGet()
    {
        return $this->method() === 'get';
    }

    public function isPost()
    {
        return $this->method() === 'post';
    }

    public function getBody()
    {
        $body = [];

        if ($this->method() === 'get') {
            foreach ($_GET as $key => $value) {
                $body[$key] = filter_input(INPUT_GET, $key, FILTER_SANITIZE_SPECIAL_CHARS);
            }
        }
        if ($this->method() === 'post') {
            if (!empty($_FILES['files'])) {
                $photos = $this->getCleanPhotos($_FILES);
                foreach ($photos as $photo) {
                    $filename = $photo['name'];
                    $filetmpname = $photo['tmp_name'];
                    $folder = "assets/img/";
                    if (move_uploaded_file($filetmpname, $folder . $filename)) {
                        $body[$photo['name']] = $filename;
                    }
                }
            } else {
                $body[$key] = filter_input(INPUT_POST, $key, FILTER_SANITIZE_SPECIAL_CHARS);
            }
        }
        return $body;
    }

    public function getCleanPhotos(array $files)
    {
        $data = [];
        $nbrPhotos = count($files['files']['name']);
        for ($i = 0; $i < $nbrPhotos; $i++) {
            $data[$i]['name'] = $files['files']['name'][$i];
            $data[$i]['type'] = $files['files']['type'][$i];
            $data[$i]['tmp_name'] = $files['files']['tmp_name'][$i];
            $data[$i]['size'] = $files['files']['size'][$i];
        }
        return $data;
    }
}
