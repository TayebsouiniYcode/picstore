<?php

namespace app\controllers;
use app\core\Request;
use app\core\Controller;
use app\models\PhotoModel;
use app\core\Application;


class HomeController extends Controller
{
    public function index(Request $request)
    {
        if ($request->isGet()){
            return $this->render('home');
        }
        if ($request->isPost()) {
            $photo = new PhotoModel();
            $data = $request->getBody();
            $dataList = [];
            $isSaved = true;
            foreach($data as $key => $value){
                $photo->name = $value;
                if(!($photo->save())) {
                    $isSaved = false;
                }
            }
            if($isSaved){
                Application::$app->response->redirect('/position');
                return;
            } else {
                echo "papa";
            }
        }
    }

    public function position(Request $request)
    {
        if ($request->isGet()) {
            $photo = new PhotoModel();
            $photo->selectAll();
            return $this->render('position', [
                'photos' => $photo->dataList
            ]);
        }
    }
}